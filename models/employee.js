const mongoose = require("mongoose")//mongoose importing
const schema = mongoose.Schema(//structure creating
    {
        "empId":String,
        "empName":String
    }
)

let employeemodel = mongoose.model("employees",schema);
module.exports={employeemodel}
//collection name given and export it . make always the collection as plural
//can create multiple files in models