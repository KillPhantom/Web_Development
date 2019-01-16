# Git Command

> * **Git Init**
>
> ~~~python
> git init ## initialize the git and save all the change inside current repo
> ##I find all the file but have not tracked them yet
> ~~~

---

> * GIt status
>
> ~~~python
> git status ##See all the file inside
> ~~~

---

> * Git Add and Commit
>
> ~~~python
> git add app.js ## add a file into git
> git add .  ## add all the changes to commint
> git commit -m "add app file" ## "" is a description of 
> ~~~

> * Git Log and Checkout
>
> ~~~python
> git log ## see commit history
> #1. copyt the commint hash line
> #2. press q to quit and use command below
> 
> git checkout 5cdf334f32d1s123ds23a3aa
> #HEAD
> # 0 -> 0-> 0-> 0
> #            (Master)
> #check go back to old code
> git checkout master# go back to master version
> 
> 
> 
> git revert --no--commit 06755fcfd..HEAD
> git commit
> #go back to previous of the code
> ~~~
>
>

