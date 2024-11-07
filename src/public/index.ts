function deleteTask(id: number):void{
    fetch('/delete_tasks', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id }) 
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.reload()
        } else {
            console.error('Failed to delete task');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


function doneTask(id:number):void{

    const audio = new Audio();
    audio.src = '/sword-sound-effect-2-234986.mp3';

    fetch('/done_task', {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id }) 
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // alert(`Task with ID ${id} deleted successfully`);
            audio.play()

            audio.onended = () => {
                window.location.href = '/';
            
            };
        

        } else {
            console.error('Failed to update task');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });

}





// function editTask(id:number):void{



//     fetch('/done_task', {
//         method: 'put',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ id: id }) 
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.success) {

           
        

//         } else {
//             console.error('Failed to update task');
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });

// }





function play(){
    const audio = new Audio();
    audio.src = '/sword-sound-effect-2-234986.mp3'; 
    audio.play()

}


function editTask(id: string, title: string): void {
    // Set the task ID and title in the modal
    const taskIdElement = document.getElementById('taskId') as HTMLInputElement;
    const editTaskTitleElement = document.getElementById('editTaskTitle') as HTMLInputElement;

    if (taskIdElement && editTaskTitleElement) {
        taskIdElement.value = id;
        editTaskTitleElement.value = title;
    }
}


