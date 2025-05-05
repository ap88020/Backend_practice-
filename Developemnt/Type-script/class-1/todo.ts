interface todo{
    title : string,
    description : string,
    done : boolean,
}

interface todoInput {
    todo : todoType;
}

function Todo(props : todoInput);