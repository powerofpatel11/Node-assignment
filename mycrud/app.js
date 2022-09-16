const file=require("./File")
const yargs=require("yargs")


yargs.command(
    {
        command:"create",
        builder:{
            name:{
                type:String
            },
            course:{
              type:String
            },
            roll:{
                type:Number
            }

        },
        handler: function (argv){
          const data={
            name:argv.name,
            course:argv.course,
            roll:argv.roll

          }
          file.createfile(data)
        }
    }
)








yargs.command(
  {
      command:"read",
      
      handler: function (argv){
        

       file.readfile();
        }
      
      }
  
)



yargs.command(
  {
    command:"findname",
    builder:{
      name:{
        type:String
      }
    },
    handler :function(argv){
     file.getname(argv.name)
    }
  }
)

yargs.command(
  {
    command:"remove",
    builder:{
      name:{
        type:String
      }
    },
       handler:function(argv){
      file.removefile(argv.name)
    }
  }
)




yargs.argv