// html skeleton provider
export default function template(title, initialState = {}, content = "") {
    let scripts = ""; // Dynamically ship scripts based on render type
    if (content) {
        scripts = ` <script>
                   window.__STATE__ = ${JSON.stringify(initialState)}
                </script>
                <script src="assets/client.js"></script>
                `;
    } else {
        scripts = ` <script src="assets/bundle.js"> </script> `;
    }
    let page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> ${title} </title>
                <script src="https://kit.fontawesome.com/78040b4acd.js" crossorigin="anonymous"></script>
                <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet">
                <link href="assets/style.css" rel="stylesheet">
              </head>
              <body>
                   <div id="app">${content}</div>
                  ${scripts}
              </body>
              `;

    return page;
}
