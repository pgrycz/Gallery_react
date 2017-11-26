# Gallery_react

# Images server API (`server/NodeFileUpload.js`)
* Start the server `node server/NodeFileUpload.js`
* The API is exposed port 9090
* Available API:
  * POST http://localhost:9090/file with file, stores the content in `files` directory.
  * GET http://localhost:9090/files returns an array of uploaded file names e.g. `["Grid_UI.jpg","Grid_UI_option2.jpg"]`
  * GET http://localhost:9090/file/FILE_NAME provides the content of previously uploaded file e.g. http://localhost:9090/file/Grid_UI.jpg
