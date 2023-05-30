import Modal from './components/Modal';
import Timer from './components/Timer';
import InputHandler from './components/InputHandler';

function App() {
  return (
    <div>
      <Modal title="Timer">
        <Timer />
      </Modal>

      <Modal title="Input handler">
        <InputHandler />
      </Modal>
    </div>
  );
}

export default App;
