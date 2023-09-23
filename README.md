# agili README

Agili is a minimal extension which provides the following commands

* `saveAndRepeat` Save Current file and repeats last Command in Terminal, by sending the sequence `\u001b[A\n` to terminal. However in powershell sequence is slightly modified.
* `execute_cell`: Execute Cell surrounded by `#% ...` markers. See following example

```python
print(1)
#% start
def greet(name):
    print(f'Hi {name}, nice to see you')

## greet('Claudia') # pseudocomment will be removed when executing block
#% end
print(1)
```
