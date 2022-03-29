import './App.css';
import  {TreeView}  from './components';
const tree = [
  {
    id:'1',
    label: 'Frontend',
    items: [
      {
        id:'2',
        label: 'HTML',
        items: [
          
        ],
      },
      {
        id:'3',
        label: 'CSS',
        items: [
          {
            label: 'Flex-box',
            items: [
              
            ],
          },
          {
            id:'5',
            label: 'Grid',
            items: [
              
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'Backend',
    items: [],
  }
]
function App() {
  return (
    <div className="App">
      <TreeView tree={tree} />
    </div>
  );
}
export default App;
