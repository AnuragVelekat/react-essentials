import { useState } from "react";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";

function App() {
  const [tabContent, setTabContent] = useState();

  function handleClick(selectedButton) {
    // selectedButton => Components, JSX, Props, State
    setTabContent(EXAMPLES[selectedButton]);
  }

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => (
              <CoreConcept key={item.title} {...item} />
            ))}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={tabContent === EXAMPLES["components"]}
              onClick={() => handleClick("components")}>
              Components
            </TabButton>
            <TabButton
              isSelected={tabContent === EXAMPLES["jsx"]}
              onClick={() => handleClick("jsx")}>
              JSX
            </TabButton>
            <TabButton
              isSelected={tabContent === EXAMPLES["props"]}
              onClick={() => handleClick("props")}>
              Props
            </TabButton>
            <TabButton
              isSelected={tabContent === EXAMPLES["state"]}
              onClick={() => handleClick("state")}>
              State
            </TabButton>
          </menu>
          {!tabContent ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{tabContent.title}</h3>
              <p>{tabContent.description}</p>
              <pre>
                <code>{tabContent.code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
