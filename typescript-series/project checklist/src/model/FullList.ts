import ListItem from './ListItem'

interface List {
    list: ListItem[],
    load(): void,
    save(): void,
    clearList(): void,
    addItem(itemObj: ListItem): void,
    removeItem(id: string): void 
}

export default class FullList implements List {

    static instance: FullList = new FullList();

    private constructor(private _list: ListItem[] = []){}

    get list(): ListItem[]{
        return this._list
    }

    save(): void {
        localStorage.setItem("myList", JSON.stringify(this._list))
    }

    clearList(): void {
        this._list = []
        this.save()
    }

    addItem(itemObj: ListItem): void {
        this._list.push(itemObj)
        this.save()
    }

    // use for callback function
    /*
    private static idToRemove:string = ''
    
    removeID (id: string){
        
        FullList.idToRemove = id
        console.log(FullList.idToRemove)
    }

    callbackFilterItem (objItem:ListItem): boolean {
        console.log("idToRemove " + FullList.idToRemove  + " objItem.id " + objItem.id )
        if(objItem.id !== FullList.idToRemove)
            return true
        return false
    }
    */
    

    removeItem(id: string): void {
        // no callback function
        this._list = this._list.filter(item => item.id !== id)

        // use for callback function
        //this.removeID(id)
        //this._list = this._list.filter(this.callbackFilterItem);
        //

        this.save()
    }

    load(): void {
        const storedList: string | null = localStorage.getItem("myList")
        if(typeof storedList != "string") return

        const parsedList: {_id: string, _item: string, _checked: boolean}[] = JSON.parse(storedList)

        parsedList.forEach(itemObj => {
            const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked)
            FullList.instance.addItem(newListItem)
        })
    }


}