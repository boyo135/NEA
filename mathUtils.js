// #region utils
const double = (number) => {
    return number * 2
}

const square = (number) => {
    return number ** 2
}
// #endregion



// #region exports
// define an object to hold all utils
const mathUtils = {
    double,
    square
}

// default export for the whole object
export default mathUtils

// named exports for each subroutine
export { double, square }
// #endregion