import { Route, Routes } from 'react-router-dom';

import { ManageContactsPage } from './pages/ManageContactsPage';
import { ContactsPage } from './pages/ContactsPage';
import { LoginPage } from './pages/LoginPage';

function App() {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route
          path="contacts/create"
          element={<ManageContactsPage operation="create" />}
        />
        <Route
          path="/contacts/edit"
          element={<ManageContactsPage operation="edit" />}
        />
      </Routes>
    </div>
  );
}

export { App };
