const express = require('express');
let app = express();
app.set(express.static("public"));
app.listen(process.env.PORT || 8080, () => {
    console.log("Listening at 8080")
})