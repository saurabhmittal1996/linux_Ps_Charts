# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.shortcuts import HttpResponse
import subprocess

#This method is acting like basic index.html for every project
def index(request):
     return render(request,'todo.html')

#This method is executing 1st command
def runcommand(request):
    process = subprocess.Popen('ls', 
    shell=True, 
    stdout=subprocess.PIPE, 
    stderr=subprocess.PIPE )
    return HttpResponse(process.stdout)

#This method is executing 2nd command
def runcommand2(request):
    process = subprocess.Popen('ls -la', 
    shell=True, 
    stdout=subprocess.PIPE, 
    stderr=subprocess.PIPE )
    return HttpResponse(process.stdout)

def cpu(request):
    #TO DO: Returns a random number that may or may not be cpu usage :)
    import random
    return HttpResponse(random.randint(0,100));

