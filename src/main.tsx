import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"

async function enableMocking() {
  if (
    !(process.env.NODE_ENV === "development" && import.meta.env.MODE === "msw")
  ) {
    return
  }

  // const { worker } = await import("../mocks/browser.js")

  // // `worker.start()` returns a Promise that resolves
  // // once the Service Worker is up and ready to intercept requests.
  // return worker.start()
  return
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
})
