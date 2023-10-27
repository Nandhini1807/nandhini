javascript
function addExercise() {
    var exerciseInput = document.getElementById('exerciseInput').value;
    if (exerciseInput === '') {
        alert("Please enter an exercise!");
        return;
    }
    var exerciseList = document.getElementById('exerciseList');
    var newExercise = document.createElement('li');
    newExercise.appendChild(document.createTextNode(exerciseInput));
    exerciseList.appendChild(newExercise);
    document.getElementById('exerciseInput').value = '';
}