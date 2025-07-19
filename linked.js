export class LinkedList{
    constructor(){
        this.head = null;
    }

    append(num){
        const node = new Node();
        node.value = num;
        node.next = null;

        if ( this.head === null ){
            this.head = node;
            return;
        }

        let temp = this.head;

        while ( temp.next !== null ){
            temp = temp.next;
        }
        temp.next = node;
    }

    prepend(num){
        const node = new Node();
        node.value = num;
        if ( this.head === null ){
            this.head = node;
            node.next = null;
            return;
        }
        
        node.next = this.head;
        this.head = node;
    }

    size(){
        if ( this.head === null){
            return 0;
        }
        let counter = 1;
        let temp = this.head;
        while ( temp.next !== null ){
            temp = temp.next;
            counter += 1
        }
        return counter

    }

    tail(){
        if ( this.head === null ){
            return null;
        }

        let temp = this.head;
        while ( temp.next !== null){
            temp = temp.next;
        }
        return temp;
    }

    atIndex(index){
        
        if ( this.head === null){
            return null;
        }

        let counter = 0;
        let temp = this.head;

        while ( counter !== index){
            counter+=1;
            if(temp.next){
                temp = temp.next;
            }
            else{
                return null;
            }
        }
        return temp;
    }

    pop(){
        if ( this.head === null){
            return;
        }
        if ( this.head.next === null){
            this.head = null;
            return;
        }

        let temp = this.head;
        while ( temp.next.next !== null){
            temp = temp.next;
        }
        temp.next = null;
    }

    contains(num){
        if (this.head === null){
            return false;
        }

        let temp = this.head;
        while ( temp !== null ){
            if ( temp.value === num){
                return true
            }
            temp = temp.next
        }
        return false;
    }

    find(num){
        
        if ( this.head === null){
            return null;
        }

        let index = 0;
        let temp = this.head;
        while ( temp !== null ){
            
            if ( temp.value === num){
                return index;
            }
            index += 1;
            temp = temp.next;
        }
        return null;
    }

    toString(){

        if ( this.head === null){
            return "null";
        }

        let temp = this.head;
        let res = "";

        while ( temp !== null){
            res += `( ${temp.value}) -> `
            temp = temp.next;
        }
        res += " -> null";
        return res;
    }

    insertAt(num,index){

        let node = new Node();
        node.value = num;
        if ( this.head === null){
            if ( index === 0 ){
                this.head = node;
            }
            return;
        }


        if ( index === 0){
            node.next = this.head;
            this.head = node;
            return;
        }

        if ( this.head.next === null){
            if ( index === 1){
                this.head.next = node;
                node.next = null;
            }
            return;
        }

        let temp = this.head.next;
        let prev = this.head;
        let counter = 1;
        
        while ( temp !== null){
            if ( counter === index ){
                prev.next = node;
                node.next = temp;
                return;
            }
            prev = prev.next;
            temp = temp.next;
            counter += 1;
        }
    }

    removeAt(index){

        if ( this.head === null){
            return;
        }

        if ( this.head.next === null ){
            if ( index === 0){
                this.head = null;
            }
            return;
        }

        let prev = this.head;
        let counter = 1;
        let temp  = this.head.next;

        while ( temp !== null ){
            if (counter === index ){
                let x = temp.next;
                prev.next = x;
                temp.next = null;
                return;
            }

            prev = prev.next;
            temp = temp.next;
            counter += 1;
        }
    }
}

class Node{
    constructor(){
        this.value = null;
        this.next = null;
    }
}