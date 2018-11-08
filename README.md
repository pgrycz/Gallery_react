# Gallery_react (postponed project, will be continued soon)

# Images server API (`server/NodeFileUpload.js`)
* Start the server `node server/NodeFileUpload.js`
* The API is exposed port 9090
* Available API:
  * `POST http://localhost:9090/file` expects the file content with the `description` and `tags` body parameters. On the front end side it looks: 
  <pre>
  handleFileUpload(proxy) {
        let data = new FormData();
        data.append('file', proxy.currentTarget.files[0]);
        data.append('name', 'Awesome Cat Pic');
        data.append('tags', ['tag2', 'tag2']);
        axios.post('http://localhost:9090/file', data);
  }
  </pre>
  * `GET http://localhost:9090/files` returns an array of uploaded information e.g. 
  <pre>
  [
    {
        "filename": "IMG_20161229_160502.jpg",
        "description": "Awesome Cat Pic",
        "tags": ["tag2","tag2"]
    },
    {
        "filename": "Fabia001.jpg",
        "description": "Awesome Cat Pic",
        "tags": ["tag1","tag2"]
    }
  ]
  </pre>
  * `GET http://localhost:9090/file/filename` provides the content of previously uploaded file e.g. `http://localhost:9090/file/IMG_20161229_160502.jpg`
