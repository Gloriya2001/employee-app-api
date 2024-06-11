const mongoose = require("mongoose")//mongoose importing
const schema = mongoose.Schema(//structure creating
    {
        "empId":{type:String,required:true},
        "empName":{type:String,required:true}
    }
)

let employeemodel = mongoose.model("employees",schema);
module.exports = {employeemodel}
//collection name given and export it . make always the collection as plural
//can create multiple files in models