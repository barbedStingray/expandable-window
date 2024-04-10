import logo from './logo.svg';
import './App.css';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';




function App() {

  const [isOpen, setIsOpen] = useState(false);



  return (
    <AnimatePresence>
      <div className="App">

        <motion.div
          className='card'
          onClick={() => setIsOpen(!isOpen)}
          layout
          transition={{ layout: { duration: 1, type: 'spring' } }}
          style={{ borderRadius: '1rem', boxShadow: '0px 10px 30px black' }}
        >

          <motion.h2
            layout='position'
          >Peter Pan</motion.h2>

          {isOpen && (
            <motion.div
              className='expand'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam
              </p>
            </motion.div>
          )}
        </motion.div>

      </div>
    </AnimatePresence>
  );
}

export default App;

