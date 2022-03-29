import TreeItem from '../tree-item';

function TreeView({ tree }){
    return (
        <div>
            {
                tree.map((item, i)=>(<TreeItem key={i} {...item}  />))
            }
        </div>
    )
}
export default TreeView;
