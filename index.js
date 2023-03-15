// code your solution here
function saturdayFun(activity ="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(verb="go to the office"){
    return "This Monday, I will " + verb + ".";
}

function wrapAdjective(string="*"){
    function inner(adj="special"){
    return `You are ${string}${adj}${string}!`;
    }
    return inner;

}