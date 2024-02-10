import { Routes, Route, HashRouter as Router } from "react-router-dom";
import { NotFoundPage } from "./components/notFound/NotFound.tsx";
import { Home } from "./pages/home/Home.tsx";
import { AddArticle } from "./pages/add/AddArticle.tsx";
import { Modal } from "./components/modal/Modal.tsx";
import { ModalWrapper } from "./components/modal/modal-wrapper/ModalWrapper.tsx";
import { App } from "./App.tsx";

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="create" element={<AddArticle />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="/registration" element={<ModalWrapper />}>
        <Route index element={<Modal />} />
      </Route>
    </Routes>
  </Router>
);
