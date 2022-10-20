function readImage(element) {
  var file = element.files[0];
  var reader = new FileReader();
  reader.onloadend = function() {
    $.ajax({
      url: "https://eastus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/e95c1ddc-517f-4b04-86f8-58c271bbad6c/classify/iterations/Iteration1/image",
      data: reader.result,
      processData: false,
      contentType: "application/octet-stream",
      headers: {
        'Prediction-key': 'c5ed77e6ec28489a89c75583dbb8474b'
      },
      type: 'POST',
      body: file,
      success: function(response) {
        var result = response["Predictions"];
        alert('Detection is successful.');
      },
      error: function(error) {
        alert('Please upload an image file.');
      }
    });
  }
  reader.readAsArrayBuffer(file);
}
