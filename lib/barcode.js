const child=require('child_process');

const execBar=(args,socket)=>{
  const bar=child.spawn('barcode',[args]);
  const io=socket;
  let client=[];
  bar.stdout.on('data',(data)=>{
    console.log(data.toString()[1])
     io.emit('output',data.toString());
  })
  bar.stderr.on('data',(data)=>{
    io.emit('output',data.toString());
  })
  bar.on('error',(err)=>{
    io.emit('output',err.message);
  })
  
  
}

module.exports=execBar;