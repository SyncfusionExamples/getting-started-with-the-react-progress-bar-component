import React from 'react';
import {ProgressBarComponent, ProgressBarAnnotationsDirective, ProgressBarAnnotationDirective} from '@syncfusion/ej2-react-progressbar';
import './App.css';
import { Inject, ProgressAnnotation } from '@syncfusion/ej2-react-progressbar/src';

function App() {
  return (
    <div className="App">
      {/* set isIndeterminate={true} to enable indeterminate state */}
      <ProgressBarComponent height='160' width='160'
        type='Circular'
        showProgressValue={false} // Data label
        secondaryProgress={40} // Buffer state
        radius='80%'
        innerRadius='60%'
        segmentCount={8}      
        minimum={1}
        maximum={50}
        value={25}
        isStriped={false} // Enbale to have stripes
        trackColor="#F8C7D8"
        progressColor='#E3165B'
        trackThickness={12}
        progressThickness={12}
        animation={{enable:true, duration:2000, delay:0}}>
          <Inject services={[ProgressAnnotation]}></Inject>
          <ProgressBarAnnotationsDirective>
            <ProgressBarAnnotationDirective content={"Loading.."}></ProgressBarAnnotationDirective>
          </ProgressBarAnnotationsDirective>
        </ProgressBarComponent>
    </div>
  );
}

export default App;
