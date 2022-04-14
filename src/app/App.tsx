import { Tabs } from './Tabs'
import './App.css'

const items: any[] = [{
  id: 1,
  label: 'tab1',
  symbol: '<>',
  sup: 'A'
}, {
  id: 2,
  label: 'tab222',
  symbol: '><',
  sup: 'B'
}, {
  id: 3,
  label: 'tab3333333333',
  symbol: '|||',
  sup: 'C'
}, {
  id: 4,
  label: 'tab4 googooli',
  symbol: '!|!',
  sup: 'D'
}];

const renderFn = (item: any) => {
  return (
    <div className='tab-root'>
      <span className='symbol'>{item.symbol}</span>
      <label className='label'>{item.label}</label>
      <sup className='sup'>{item.sup}</sup>
    </div>
  );
}

function App() {

  return (
    <div className="root">
      <Tabs
        items={['tab1', 'tab222222222','tab33 googooli']}
        initialSelectedIndex={2} />
      <Tabs
        items={items}
        initialSelectedIndex={2}
        renderFn={renderFn} />
    </div>
  )
}

export default App
