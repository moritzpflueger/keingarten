/*
  This is the Google Apps Script code.

  How to use:
  1. Open your Google Sheet
  2. Go to Extensions > Apps Script
  3. Copy and paste this code
  4. Save the project
  5. Deploy the project as a web app (Publish > Deploy as web app)
  6. Copy the web app URL and use it in your frontend application

*/


function doGet(e) {
  var sheetName = e.parameter.sheet;
  var responseData;

  if (sheetName === 'Timeslots') {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Timeslots");
    const values = sheet.getRange(2, 1, 250, 3).getDisplayValues();
    responseData = values.map(item => ({
      id: item[0],
      date: item[1],
      slots: item[2]
    }));
  } else if (sheetName === 'Configuration') {
    var configSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Configuration");
    const configValues = configSheet.getRange(2, 1, 1, 2).getDisplayValues(); // Assuming status is in the first row
    responseData = {
      status: configValues[0][1] // Adjust indices based on your sheet structure
    };
  } else {
    return ContentService.createTextOutput(JSON.stringify({ result: 'failure', message: 'Invalid sheet name' }))
                         .setMimeType(ContentService.MimeType.JSON);
  }

  return ContentService.createTextOutput(JSON.stringify({ data: responseData }))
                       .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  var data = JSON.parse(e.postData.contents);

  var timeslotsSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Timeslots");
  var bookingsSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Bookings");

  var startDate = data.startDate;
  var endDate = data.endDate;
  var numberOfGuests = data.numberOfGuests;
  Logger.log("Received Start Date: " + startDate);
  Logger.log("Received End Date: " + endDate);
  Logger.log("Number of Guests: " + numberOfGuests);

  // Check availability for the entire range
  var range = timeslotsSheet.getRange("A:C");
  var values = range.getValues();
  var allAvailable = true;

  for (var i = 0; i < values.length; i++) {
    var slotDate = values[i][1];
    var availableSlots = parseInt(values[i][2]);

    if (slotDate >= startDate && slotDate <= endDate && availableSlots < numberOfGuests) {
      allAvailable = false;
      break;
    }
  }

  if (!allAvailable) {
    // One or more dates in the range are unavailable
    Logger.log("One or more dates in the range are unavailable.");
    return ContentService.createTextOutput(JSON.stringify({ result: 'failure', message: 'One or more dates in the range are unavailable', data: data, values: values }))
                        .setMimeType(ContentService.MimeType.JSON)    
  }

  // Update slots for the entire range
  for (var i = 0; i < values.length; i++) {
    var slotDate = values[i][1];
    var availableSlots = parseInt(values[i][2]);

    if (slotDate >= startDate && slotDate <= endDate) {
      var newAmountOfSlots = availableSlots - numberOfGuests
      timeslotsSheet.getRange(i + 1, 3).setValue(newAmountOfSlots);
    }
  }

  // Append the new booking data to the Bookings sheet
  bookingsSheet.appendRow([data.name, data.email, data.phone, data.numberOfGuests, data.stayingOvernight, data.startDate, data.endDate]);

  // Send a notification email to admin
  var subject = 'Buchungsbestätigung | Booking Confirmation';
  var body = 'Danke für deine Buchung | Thank you for your booking.<br/>' +
             'Diese Buchung ist kostenlos | This booking is free of charge.<br/><br/>' +
             'Name: ' + data.name + '<br/>' +
             'Email: ' + data.email + '<br/>' +
             'Phone: ' + data.phone + '<br/>' +
             'Number of Guests: ' + data.numberOfGuests + '<br/>' +
             'Staying Overnight: ' + data.stayingOvernight + '<br/>' +
             'Start Date: ' + data.startDate + '<br/>' +
             'End Date: ' + data.endDate + '<br/><br/>' +
             'Mehr zur Anreise in den <a href="https://maps.app.goo.gl/JaVsrCGgtCqHax3j8">keingarten</a> und andere Informationen findest du auf unserer <a href="https://keingarten.xyz">Website</a> im <a href="https://keingarten.xyz/#faq">FAQ</a>. <br/>' +
             'You can find more information on how to get to the <a href="https://maps.app.goo.gl/JaVsrCGgtCqHax3j8">keingarten</a> and other information on our <a href="https://keingarten.xyz">website</a> in the <a href="https://keingarten.xyz">FAQ</a>. <br/><br/>' +             
             'Für alle weiteren Fragen kontaktiere uns: keingarten.xyz@gmail.com <br/>' +
             'For further questions reach out to us: keingarten.xyz@gmail.com <br/><br/>' +             
             'In dringenden Fällen kannst du uns anrufen: +49 176 32 77 87 01 <br/>' +
             'In urgent cases you can call us: +49 176 32 77 87 01 <br/><br/>' +                          
             'Wir freuen uns auf deinen Besuch. <br/>' +
             'We look forward to your visit. <br/><br/>' +                                       
             '<a href="https://keingarten.xyz">keingarten.xyz</a> <br/>' +
             '48°47\'56.3"N 9°07\'41.7"E <br/><br/>';

  MailApp.sendEmail({
    to: 'keingarten.xyz@gmail.com', 
    subject: subject, 
    htmlBody: body
  });
  MailApp.sendEmail({
    to: data.email, 
    subject: subject, 
    htmlBody: body
  });

  // Create and return the response
  return ContentService.createTextOutput(JSON.stringify({ result: 'success', data: data }))
                       .setMimeType(ContentService.MimeType.JSON)                      
}
function testDoPost() {
  var testData = {
    "startDate": "2024-08-02",
    "endDate": "2024-08-03",
    "name": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "numberOfGuests": 3,
    "stayingOvernight": false
  };

  var e = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };

  var result = doPost(e);
  Logger.log(result.getContent());
}