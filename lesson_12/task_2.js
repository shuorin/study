let area = [1, null, 0, 1, null, 1, 0, 0, 1];

for(var index = 0; index < area.length; index++) {
    if (index === 3 || index === 6 ) {
        document.write("<br>");
    }
    if (area[index] === 1) {
        document.write("<button>X</button>");
    } else if (area[index] === 0) {
         document.write("<button>O</button>");
     } else if (area[index] === null) {
        document.write("<button>||</button>");
    }
}