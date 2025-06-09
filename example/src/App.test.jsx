import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('renders all tabs', () => {
    render(<App />);
    const tabs = screen.getAllByText('Tab title');
    expect(tabs).toHaveLength(6);
  });

  it('renders table with correct number of rows', () => {
    render(<App />);
    const tableRows = screen.getAllByText('Table cell text');
    expect(tableRows).toHaveLength(50);
  });

  it('renders table with correct columns', () => {
    render(<App />);
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
    expect(screen.getByText('City')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();
  });

  it('renders table with correct title and footer', () => {
    render(<App />);
    expect(screen.getByText('This is table title')).toBeInTheDocument();
    expect(screen.getByText('This is table footer')).toBeInTheDocument();
  });
}); 