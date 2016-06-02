from django.contrib import admin

from . import models


class ExamAdmin(admin.ModelAdmin):
    model = models.Exam
    list_display = ('title', 'module')
    raw_id_fields = ('module', )


class AnswerAdmin(admin.ModelAdmin):
    model = models.Answer
    list_display = ('get_question_text', 'value', 'is_correct')
    raw_id_fields = ('question', )

    def get_question_text(self, obj):
        return obj.question.question_text


class AnswerInline(admin.TabularInline):
    model = models.Answer


class QuestionAdmin(admin.ModelAdmin):
    model = models.Question
    list_display = ('question_text', 'question_type', 'exam')
    inlines = [AnswerInline, ]
    raw_id_fields = ('exam', )


admin.site.register(models.Exam, ExamAdmin)
admin.site.register(models.Question, QuestionAdmin)
admin.site.register(models.Answer, AnswerAdmin)
