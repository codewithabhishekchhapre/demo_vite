import React from 'react'

function Faq() {
  return (
    <>
   
        <div className="bg-background p-4">
          <h2 className="text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <div className="flex justify-between items-center bg-card p-4 rounded-lg">
              <span className="text-muted-foreground">What is Netflix?</span>
              <button className="text-primary">+</button>
            </div>
            <div className="flex justify-between items-center bg-card p-4 rounded-lg">
              <span className="text-muted-foreground">How much does Netflix cost?</span>
              <button className="text-primary">+</button>
            </div>
            <div className="flex justify-between items-center bg-card p-4 rounded-lg">
              <span className="text-muted-foreground">Where can I watch?</span>
              <button className="text-primary">+</button>
            </div>
            <div className="flex justify-between items-center bg-card p-4 rounded-lg">
              <span className="text-muted-foreground">How do I cancel?</span>
              <button className="text-primary">+</button>
            </div>
            <div className="flex justify-between items-center bg-card p-4 rounded-lg">
              <span className="text-muted-foreground">What can I watch on Netflix?</span>
              <button className="text-primary">+</button>
            </div>
            <div className="flex justify-between items-center bg-card p-4 rounded-lg">
              <span className="text-muted-foreground">Is Netflix good for kids?</span>
              <button className="text-primary">+</button>
            </div>
          </div>
        </div>

    </>
  )
}

export default Faq