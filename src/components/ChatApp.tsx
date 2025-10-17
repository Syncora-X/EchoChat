import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Profile } from '../lib/supabase';
import { UserList } from './UserList';
import { ChatWindow } from './ChatWindow';
import { LogOut, MessageSquare } from 'lucide-react';

export const ChatApp = () => {
  const [selectedUser, setSelectedUser] = useState<Profile | null>(null);
  const { profile, signOut } = useAuth();

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-blue-50 to-cyan-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">ChatApp</h1>
              <p className="text-sm text-gray-600">Welcome, {profile?.name}</p>
            </div>
          </div>
          <button
            onClick={signOut}
            className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
          >
            <LogOut className="w-5 h-5" />
            <span className="hidden sm:inline">Sign Out</span>
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        <div className="w-full sm:w-80 md:w-96 flex-shrink-0">
          <UserList selectedUser={selectedUser} onSelectUser={setSelectedUser} />
        </div>

        <div className="flex-1 hidden sm:flex">
          {selectedUser ? (
            <ChatWindow selectedUser={selectedUser} />
          ) : (
            <div className="w-full flex flex-col items-center justify-center text-gray-500 bg-gray-50">
              <MessageSquare className="w-16 h-16 mb-4 opacity-50" />
              <p className="text-lg font-medium">Select a user to start chatting</p>
              <p className="text-sm mt-2">Choose someone from the list to begin your conversation</p>
            </div>
          )}
        </div>

        {selectedUser && (
          <div className="fixed inset-0 z-50 sm:hidden bg-white">
            <div className="h-full flex flex-col">
              <div className="bg-white border-b border-gray-200 p-4 shadow-sm flex items-center gap-3">
                <button
                  onClick={() => setSelectedUser(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition"
                >
                  <span className="text-xl">←</span>
                </button>
                <div className="flex items-center gap-3 flex-1">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-semibold">
                      {selectedUser.name.charAt(0).toUpperCase()}
                    </div>
                    {selectedUser.is_online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  <div>
                    <h2 className="font-semibold text-gray-800">{selectedUser.name}</h2>
                    <p className="text-sm text-gray-500">
                      {selectedUser.is_online ? 'Online' : 'Offline'}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 overflow-hidden">
                <ChatWindow selectedUser={selectedUser} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
