# node version
$ node -v
v18.15.0

```
git config --global user.name "kaisa"
git config --global user.email "kaisaohnae@gmail.com"
rm -rf .git
Remove-Item -Recurse -Force .git
git init
git add .
git commit -m "init"
git remote add origin "https://github.com/kaisaohnae/kaisachlois.git"
git push -u --force origin master
```
## vscode 
- hide node_modules
```
npm create vite@latest
```

## jenkin

nodejs 플러그인 설치
managed files 설치

- Global Tool Configuration 에서 
nodejs 8.17.0 install 

git repositories 와 등록된 계정 credientials 연결하고 
branch build 는 master 로 

- Build 스텝순으로...
1. Execute NodeJS script : 사실 이건 필요없다
script 에 console.log('-------') 찍어만 보자

2. Excecute Windows batch command 
- npm install

3. PowerShell 파일을 실행한다. (nssm 으로 등록된 서비스를 실행)
Command 
powershell.exe -NoProfile -NonInteractive -ExecutionPolicy Bypass -File d:/build/dev-ebabcrsfront.ps1
```
Write-Output ":::::::::: DEV-EBABCRSFRONT start"
Stop-Service -Name ebabcrsfront
Start-Sleep 5
Write-Output ":::::::::: DEV-EBABCRSFRONT Start-Service re-start"
Start-Service -Name ebabcrsfront 
Start-Sleep 10
Write-Output ":::::::::: DEV-EBABCRSFRONT end"
exit
```
### ebabcrsfront.bat 등록
```
#cd D:\build\nssm-2.24\win64
#nssm remove ebabcrsfront
#nssm install ebabcrsfront
# - path : D:\build\dev-ebabcrsfront.bat
# - startup directory : D:\build
# - install service
```
### ebabcrsfront.bat 내용
```
cd D:\Jenkins\Jenkins\.jenkins\workspace\DEV-EBABCRSFRONT
npm run dev
```