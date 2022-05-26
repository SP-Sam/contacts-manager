import { Route, Routes } from 'react-router-dom';

import { ChangeContacts } from './pages/ChangeContacts';
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
          element={<ChangeContacts operation="create" />}
        />
        <Route
          path="/contacts/update"
          element={<ChangeContacts operation="update" />}
        />
      </Routes>
    </div>
  );
}

export { App };
