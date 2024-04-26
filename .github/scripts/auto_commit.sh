# if [ ! -f ./days/auto-commit.md ]; then
#     echo "- $(date)  " > ./days/auto-commit.md
#     # it create a new file with the current date and time as a list item. the space after the date creates a line break
#     # the > operator creates a new file
# else
#     # Append (add) the current date and time to the existing content of the file as a new list item
#     echo "- $(date)  " >> ./days/auto-commit.md
#     # the >> operator appends the output to the end of the file
# fi

# Add the new file to the staging area
git add ./days/auto-commit.md

# Make a commit with a message
git commit -m "Commit automatizado $(date)"

# Push the changes to GitHub
git push origin main