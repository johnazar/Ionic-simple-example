const courseNameInput = document.querySelector('#input-course-name');
const courseRatingInput = document.querySelector('#input-course-rating');
const addBtn = document.querySelector('#btn-add');
const courseList = document.querySelector('#course-list');
const alertCtrl = document.querySelector('ion-alert-controller');

addBtn.addEventListener('click',()=>{
    const enterdCousreName = courseNameInput.value ;
    const enterdCousreRating = courseRatingInput.value ;


    if(
        enterdCousreName.trim()<=0||
        enterdCousreRating.trim()<=0||
        enterdCousreRating < 0||
        enterdCousreRating > 5
        )
        {console.log('clicked');
           alertCtrl
           .create({
                header:'Invalid input',
                message: 'This is an alert message.',
                buttons: ['OK']
            }).then(alertEL => alertEL.present());


            courseNameInput.value = '';
            courseRatingInput.value = '';
            
            return;
        }

        const newItem =document.createElement('ion-item');
        newItem.innerHTML = `<strong>${enterdCousreName}: </strong> &nbsp; ${enterdCousreRating}/5`;
        courseList.appendChild(newItem);

        courseNameInput.value = '';
        courseRatingInput.value = '';

});