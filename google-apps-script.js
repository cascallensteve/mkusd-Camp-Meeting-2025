// Updated Google Apps Script code for handling pledges
function doPost(e) {
  try {
    // Log the received parameters for debugging
    console.log('Received parameters:', e.parameter);
    
    var data = {
      name: e.parameter.name || 'No name provided',
      email: e.parameter.email || 'No email provided',
      phone: e.parameter.phone || 'No phone provided',
      item: e.parameter.item || 'No item provided',
      amount: e.parameter.amount || 'No amount provided'
    };
    
    console.log('Processed data:', data);
    
    var result = savePledge(data);
    
    return ContentService
      .createTextOutput(result)
      .setMimeType(ContentService.MimeType.TEXT);
      
  } catch (error) {
    console.log('Error in doPost:', error.toString());
    return ContentService
      .createTextOutput('Error: ' + error.toString())
      .setMimeType(ContentService.MimeType.TEXT);
  }
}

function doGet() {
  return HtmlService.createHtmlOutputFromFile('form');
}

function savePledge(data) {
  try {
    console.log('savePledge called with data:', data);
    
    // Get the active spreadsheet
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    console.log('Spreadsheet found:', spreadsheet.getName());
    
    var sheet = spreadsheet.getSheetByName('Pledges');
    if (!sheet) {
      console.log('Creating new Pledges sheet...');
      sheet = spreadsheet.insertSheet('Pledges');
      sheet.appendRow(["Name", "Email", "Phone", "Pledge Item", "Amount", "Time"]);
      console.log('New sheet created with headers');
    }

    var timeStamp = new Date();
    var rowData = [data.name, data.email, data.phone, data.item, data.amount, timeStamp];
    console.log('Adding row:', rowData);
    
    sheet.appendRow(rowData);
    console.log('Row added successfully');

    // Send confirmation email
    try {
      if (data.email && data.email !== 'No email provided' && data.email.includes('@')) {
        var subject = "Pledge Confirmation - Thank You!";
        var body = "Hello " + data.name + ",\n\n" +
                   "Thank you for your pledge!\n\n" +
                   "Pledge Item: " + data.item + "\n" +
                   "Amount: KSh " + data.amount + "\n" +
                   "Time: " + timeStamp + "\n\n" +
                   "God bless you!\n\n" +
                   "MKU SDA Camp Meeting 2025";
        
        MailApp.sendEmail(data.email, subject, body);
        console.log('Email sent successfully to:', data.email);
        
        return "✅ Your pledge has been recorded and a confirmation email has been sent.";
      } else {
        console.log('Email not valid, skipping email send');
        return "✅ Your pledge has been recorded successfully.";
      }
    } catch (emailError) {
      console.log('Email error:', emailError.toString());
      return "✅ Your pledge has been recorded successfully.";
    }
  } catch (error) {
    console.log('Error in savePledge:', error.toString());
    throw error;
  }
}
