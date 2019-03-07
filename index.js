// Declare all constants (first 2 given by professor)
const org1_depts = [
    {
        name: 'accounting',
        children: [
            {name: 'accounting payable', children:[] },
            {name: 'accounting receivable', children: [] },
        ],
    },
    {
        name: 'finance',
        children: [],
    },
]

const org2_depts = [
    {
        name: 'accounting',
        children: [
            {name: 'accounting payable', children: [] },
            {
                name:'accounting receivable',
                children: [{name:'cash',children:[]}, {name:'check',children:[]}],
            },
        ],
    },
    {
        name:'finance',
        children: [{name:'investment',children:[]}],
    },
]

const ulBegin = '<ul>';
const ulEnd = '</ul>';

let number = 1;

// Function recursively finds and prints nodes for content in boxes
function orgs(depts)
{
    // start unordered list
    document.write(ulBegin);
    for (let i=0; i<depts.length; i++)
    {
        document.write(`<li>${depts[i].name}</li>`);
        // Recursion
        orgs(depts[i].children);
    }
    // end unordered list
    document.write(ulEnd);
}

// Function prints the appropriate header and div box
// Calls function orgs
function printDepts(depts)
{
    document.write(`<br><h2>Organization ${number}</h2>`);
    number+=1;
    // Create div box
    document.write('<div>');
    for (let i=0; i<depts.length; i++)
    {
        document.write(`<p>${depts[i].name}</p>`);
        orgs(depts[i].children);
    }
    document.write('</div>');
}

// Call printDepts function to print constants
printDepts(org1_depts);
printDepts(org2_depts);
