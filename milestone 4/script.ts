 const form = document.getElementById('Resume') as HTMLFormElement
 const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement
 //frm submission 
 form.addEventListener('submit',(event :Event) =>{
    event.preventDefault();

    const name =(document.getElementById('name')as HTMLInputElement).value
    const Lastname =(document.getElementById('lastname')as HTMLInputElement).value
    const phoneno =(document.getElementById('phone no')as HTMLInputElement).value
    const email =(document.getElementById('email')as HTMLInputElement).value
    const Education =(document.getElementById('Education')as HTMLInputElement).value
    const Experiance =(document.getElementById('Experiance')as HTMLInputElement).value
    const  Skills=(document.getElementById('Skills')as HTMLInputElement).value

    //generat resume dynamically
    const resumeHTML = `
    <h2><b> Editable Resume</b><h2>
    <h3>personal information</h3>
    <p><b> First Name:</b> <span contenteditable="true">${name}</span></p>
    <p><b> Last Name:</b><span contenteditable="true">${Lastname}</span></p>
    <p><b> phone no:</b> <span contenteditable="true">${phoneno}</span></p>
    p><b> Email ID:</b><span contenteditable="true">${email}</span></p>
    
    <h3>Education</h3>
    <p contenteditable="true">${Education}</p>
    
    <h3>Experiance</h3>
    <p contenteditable="true">${Experiance}</p>

    <h3>Skills</h3>
    <p contenteditable="true">${Skills}</p>
    `;

    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error('The resume display element is missing.');
    }

 })
