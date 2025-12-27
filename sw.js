self.addEventListener("message",e=>{
  if(e.data.type==="schedule"){
    const task=e.data.task;
    const time=new Date(`${task.date}T${task.time}`) - Date.now();
    if(time>0){
      setTimeout(()=>{
        self.registration.showNotification("🔔 תזכורת",{
          body:task.text,
          tag:task.id,
          requireInteraction:true
        });
      },time);
    }
  }
});

self.addEventListener("notificationclick",e=>{
  e.notification.close();
  e.waitUntil(clients.openWindow("./"));
});
