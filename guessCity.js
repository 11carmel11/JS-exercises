function guessCity(capital, coastal, famous, ancient) {
    if (capital === false && coastal === false && famous === false && ancient === false) {
        return "Musmus";
    }
    else if (capital === true && coastal === false && famous === true && ancient === true) {
        return "Jerusalem";
    }
    else if (capital === false && coastal === true && famous === false && ancient === false) {
        return "Zikim";
    }
    else if (capital === false && coastal === false && famous === false && ancient === true) {
        return "Katzrin";
    }
    else if (capital === false && coastal === true && famous === false && ancient === true) {
        return "Acre";
    }
    else if (capital === false && coastal === true && famous === true && ancient === false) {
        return "Tel Aviv";
    }
    else return undefined;
}