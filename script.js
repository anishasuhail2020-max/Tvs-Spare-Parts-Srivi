body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #f4f4f4;
}

.top-header {
    background: #111;
    color: white;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    gap: 15px;
}

.logo {
    font-size: 22px;
    font-weight: bold;
}

.top-header input {
    padding: 8px;
    width: 300px;
}

.container {
    display: flex;
}

.sidebar {
    width: 260px;
    background: white;
    padding: 15px;
    border-right: 1px solid #ddd;
}

.sidebar h3 {
    margin-top: 20px;
}

.sidebar select {
    width: 100%;
    padding: 8px;
}

.content {
    flex: 1;
    padding: 20px;
}

table {
    width: 100%;
    border-collapse: collapse;
    background: white;
}

th, td {
    padding: 12px;
    border-bottom: 1px solid #ddd;
    text-align: left;
}

th {
    background: #0b5ed7;
    color: white;
}

footer {
    background: #111;
    color: white;
    text-align: center;
    padding: 12px;
    margin-top: 20px;
}

/* Mobile */
@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }
    .sidebar {
        width: 100%;
    }
    .top-header input {
        width: 100%;
    }
  }
