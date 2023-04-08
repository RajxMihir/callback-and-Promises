function greet (name)
{
    return new Promise((resolve) => {
       const greeting = `Hello, ${name}!`;
       resolve(greeting); 
    })
}

greet("Mihir").then((message) => console.log(message));