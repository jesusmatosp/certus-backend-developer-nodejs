function notDefined() {
    console.trace();
    try {
        someFunction(); // No definida
    } catch (error) {
        //console.error(error);
        // console.warn(error);
        console.log(error);
    }
}

function someFunction() {
    return 1;
}


notDefined();