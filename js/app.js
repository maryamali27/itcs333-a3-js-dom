// ITCS333 A3 starter — implement the to-do app per README.
// You may wrap everything in a DOMContentLoaded handler or an IIFE.
// Requirements: add / toggle-complete / delete / filter / counter,
// using event delegation on #todo-list.

// TODO: your code here
(function() { 
    'use strict';

    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');

    const error = document.getElementById('error-msg');
    const counter = document.getElementById('counter');
    const filters = document.getElementById('.filters');
    let currentFilter = 'all';

    function createItem(text){
        const li = document.createElement('li');

        const span = document.createElement('span');
        span.className = 'item=text';
        span.textContent = text;

        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'button';
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';

        li.append(span, deleteBtn);
        return li;
    }
})();

