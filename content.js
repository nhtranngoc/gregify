walk(document.body);

function walk(node) 
{   
    //I "actually" stole this function from here- nhtranngoc
    // https://github.com/panicsteve/cloud-to-butt/blob/master/Source/content_script.js
    // I stole this function from here:
    // http://is.gd/mwZp7E
    
    var child, next;
    switch ( node.nodeType )  
    {
        case 1:  // Element
        case 9:  // Document
        case 11: // Document fragment
        child = node.firstChild;
        while ( child ) 
        {
            next = child.nextSibling;
            walk(child);
            child = next;
        }
        break;

        case 3: // Text node
        if(node.parentElement.tagName.toLowerCase() != "script") {
            handleText(node);
        }

        break;
    }

}

function handleText(textNode) {
    var v = textNode.nodeValue;

    v = v.replace(/\b([Ii]t?)\b|\b(([Yy]o)?[Uu]s?)\b|\b([Ss]?[MmHhWw]e)\b|\b([Hh]im)\b|\b([Tt]he[ym])\b/gi, "Greg");
    v = v.replace(/\b([Yy]ou\'re)\b|\b([Tt]hey\'re)\b|\b([Ii]t\'s)\b/gi, "Greg is");
    v = v.replace(/\b([Mm]y*(ine)*)\b|\b([Yy]ours*)\b|\b([Hh](is|er)s*)\b|\b([Ii]ts)\b|\b((([Oo]u)|([Tt]hei))rs*)\b/gi, "Greg\'s");

    textNode.nodeValue = v;
}

