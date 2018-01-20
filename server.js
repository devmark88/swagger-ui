const express = require("express")
const path = require("path")
const pathToSwaggerUi = require("./dist").absolutePath()
const app = express()
app.use("/docs/v1.json",express.static(path.join(__dirname,"docs/v1/doc.v1.json")))
app.use("/theme/mm.css",express.static(path.join(__dirname,"node_modules/swagger-ui-themes/themes/3.x/theme-monokai.css")))

app.use(express.static(pathToSwaggerUi))
app.listen(5000, function(error) {
    if(error) {
        console.error(error)
    }
    else {
        console.log("Documentation ready to use in port 5000") //eslint-disable-line
    }
})

app.get("*", function(req, res) {
    res.sendFile(path.join(path.dirname(require.main.filename), "./dist/index.html"))
})
