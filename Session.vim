let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/work_space/app-git/redux-todo-example
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +14 src/containers/FilterShowLink.js
badd +5 src/components/ShowLink.js
badd +13 src/App.js
badd +11 src/components/Header.js
badd +324 ~/Library/Caches/typescript/3.7/node_modules/@types/react/index.d.ts
badd +18 term://.//12127:/bin/zsh
badd +49 src/App.sass
badd +22 src/components/AddTodo.js
badd +1 src
badd +10 src/containers/VisibleList.js
badd +10 src/components/TodoList.js
badd +8 src/components/Todo.js
badd +3 src/actions/index.js
badd +6 src/reducers/index.js
badd +0 src/reducers/todos.js
argglobal
%argdel
edit src/reducers/todos.js
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 65 + 65) / 130)
exe 'vert 2resize ' . ((&columns * 64 + 65) / 130)
argglobal
setlocal fdm=marker
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 6 - ((5 * winheight(0) + 10) / 20)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
6
normal! 014|
wincmd w
argglobal
if bufexists("src/App.sass") | buffer src/App.sass | else | edit src/App.sass | endif
setlocal fdm=marker
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 72 - ((18 * winheight(0) + 10) / 20)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
72
normal! 05|
wincmd w
2wincmd w
exe 'vert 1resize ' . ((&columns * 65 + 65) / 130)
exe 'vert 2resize ' . ((&columns * 64 + 65) / 130)
tabnext 1
if exists('s:wipebuf') && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 winminheight=1 winminwidth=1 shortmess=filnxtToOFcI
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
let g:this_session = v:this_session
let g:this_obsession = v:this_session
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
