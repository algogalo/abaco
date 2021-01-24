shape(50,.1,.015).repeatX(()=>150*Math.sin(time/500)).add(shape(2,.001,.015)).modulate(noise(.1,.01)).out()
